const initialJobs = [
  {
    id: "JOB-1024",
    client: "Rohit Verma",
    phone: "+91 98765 43210",
    service: "ITR Filing",
    assigned: "Anita",
    status: "Processing",
    fee: 2200,
    paid: 1500,
    expense: 350,
    documents: ["PAN card", "Aadhaar card", "Bank statement", "Form 16"],
    completedDocs: ["PAN card", "Aadhaar card", "Form 16"],
    notes: "Awaiting final bank statement."
  },
  {
    id: "JOB-1025",
    client: "Meena Khan",
    phone: "+91 91234 87650",
    service: "Legal Notice",
    assigned: "Ramesh",
    status: "Intake",
    fee: 5000,
    paid: 2000,
    expense: 0,
    documents: ["Client statement", "Agreement copy", "ID proof"],
    completedDocs: ["Client statement"],
    notes: "Draft facts under review."
  },
  {
    id: "JOB-1026",
    client: "Sanjay Patel",
    phone: "+91 99887 77665",
    service: "PAN Application",
    assigned: "Priya",
    status: "Pending Payment",
    fee: 1200,
    paid: 700,
    expense: 180,
    documents: ["Aadhaar card", "Photo", "Mobile OTP"],
    completedDocs: ["Aadhaar card", "Photo", "Mobile OTP"],
    notes: "Application submitted, balance due before delivery."
  },
  {
    id: "JOB-1027",
    client: "Farida Sheikh",
    phone: "+91 90000 11122",
    service: "Ration Card Update",
    assigned: "Sameer",
    status: "Completed",
    fee: 1800,
    paid: 1800,
    expense: 250,
    documents: ["Old ration card", "Address proof", "Family ID"],
    completedDocs: ["Old ration card", "Address proof", "Family ID"],
    notes: "Receipt issued and file closed."
  },
  {
    id: "JOB-1028",
    client: "Kavita Rao",
    phone: "+91 97777 66554",
    service: "Affidavit Drafting",
    assigned: "Ramesh",
    status: "Processing",
    fee: 1600,
    paid: 1600,
    expense: 120,
    documents: ["ID proof", "Draft details", "Stamp paper"],
    completedDocs: ["ID proof", "Draft details"],
    notes: "Stamp paper purchase pending."
  }
];

const state = {
  jobs: JSON.parse(localStorage.getItem("advocateCrmJobs") || "null") || initialJobs,
  selectedStatus: "all",
  search: "",
  selectedJobId: "JOB-1024"
};

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const titles = {
  dashboard: "Dashboard",
  jobs: "Job Cards",
  clients: "Clients",
  payments: "Payments",
  reports: "Reports"
};

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindFilters();
  bindForm();
  document.getElementById("globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });
  document.getElementById("printReceipt").addEventListener("click", () => window.print());
  render();
});

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.view).classList.add("active");
      document.getElementById("viewTitle").textContent = titles[button.dataset.view];
    });
  });
}

function bindFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.selectedStatus = button.dataset.status;
      renderJobs();
    });
  });
}

function bindForm() {
  const dialog = document.getElementById("jobDialog");
  const form = document.getElementById("jobForm");
  document.getElementById("openJobForm").addEventListener("click", () => dialog.showModal());

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const fee = Number(data.fee) || 0;
    const paid = Number(data.paid) || 0;
    const nextId = `JOB-${1024 + state.jobs.length}`;
    state.jobs.unshift({
      id: nextId,
      client: data.client,
      phone: data.phone,
      service: data.service,
      assigned: data.assigned,
      status: "Intake",
      fee,
      paid,
      expense: 0,
      documents: defaultDocuments(data.service),
      completedDocs: [],
      notes: data.notes || "New job created from dummy frontend."
    });
    state.selectedJobId = nextId;
    saveJobs();
    form.reset();
    dialog.close();
    render();
  });
}

function defaultDocuments(service) {
  const map = {
    "Legal Notice": ["Client statement", "Opponent details", "Agreement copy", "ID proof"],
    "ITR Filing": ["PAN card", "Aadhaar card", "Bank statement", "Form 16"],
    "PAN Application": ["Aadhaar card", "Photo", "Mobile OTP"],
    "Ration Card Update": ["Old ration card", "Address proof", "Family ID"],
    "Affidavit Drafting": ["ID proof", "Draft details", "Stamp paper"]
  };
  return map[service] || ["ID proof", "Application details"];
}

function filteredJobs() {
  return state.jobs.filter((job) => {
    const matchesStatus = state.selectedStatus === "all" || job.status === state.selectedStatus;
    const haystack = `${job.id} ${job.client} ${job.service} ${job.assigned} ${job.status}`.toLowerCase();
    return matchesStatus && haystack.includes(state.search);
  });
}

function render() {
  renderMetrics();
  renderKanban();
  renderStaff();
  renderJobs();
  renderClients();
  renderChecklist();
  renderLedger();
  renderReceipt();
  renderReports();
}

function renderMetrics() {
  const open = state.jobs.filter((job) => job.status !== "Completed").length;
  const completed = state.jobs.filter((job) => job.status === "Completed").length;
  const balance = state.jobs.reduce((sum, job) => sum + Math.max(job.fee - job.paid, 0), 0);
  const expenses = state.jobs.reduce((sum, job) => sum + job.expense, 0);
  const collection = state.jobs.reduce((sum, job) => sum + job.paid, 0);

  setText("openJobs", open);
  setText("completedJobs", completed);
  setText("pendingBalance", rupee.format(balance));
  setText("portalExpense", rupee.format(expenses));
  setText("todayCollection", rupee.format(collection));
}

function renderKanban() {
  const statuses = ["Intake", "Processing", "Pending Payment", "Completed"];
  document.getElementById("kanban").innerHTML = statuses.map((status) => {
    const cards = state.jobs
      .filter((job) => job.status === status)
      .map((job) => `
        <article class="job-card">
          <strong>${job.id}</strong>
          <span>${job.client}</span>
          <span>${job.service}</span>
        </article>
      `).join("");
    return `<section class="lane"><h3>${status}</h3>${cards || "<span class='muted-text'>No files</span>"}</section>`;
  }).join("");
}

function renderStaff() {
  const staff = ["Anita", "Ramesh", "Priya", "Sameer"];
  document.getElementById("staffLoad").innerHTML = staff.map((name) => {
    const count = state.jobs.filter((job) => job.assigned === name && job.status !== "Completed").length;
    const percent = Math.min(count * 34, 100);
    return `
      <div class="staff-row">
        <div>
          <strong>${name}</strong>
          <div class="progress"><span style="width:${percent}%"></span></div>
        </div>
        <span>${count} active</span>
      </div>
    `;
  }).join("");
}

function renderJobs() {
  document.getElementById("jobTable").innerHTML = filteredJobs().map((job) => `
    <tr>
      <td><strong>${job.id}</strong></td>
      <td>${job.client}<br><span class="muted-text">${job.phone}</span></td>
      <td>${job.service}</td>
      <td>${job.assigned}</td>
      <td><span class="status ${statusClass(job.status)}">${job.status}</span></td>
      <td>${rupee.format(Math.max(job.fee - job.paid, 0))}</td>
      <td><button class="ghost-btn" onclick="selectJob('${job.id}')">Open</button></td>
    </tr>
  `).join("");
}

function renderClients() {
  document.getElementById("clientCards").innerHTML = filteredJobs().map((job) => `
    <article class="client-card">
      <strong>${job.client}</strong>
      <span>${job.phone}</span>
      <span>${job.service} - ${job.id}</span>
      <button class="ghost-btn" onclick="selectJob('${job.id}')">View documents</button>
    </article>
  `).join("");
}

function renderChecklist() {
  const job = selectedJob();
  document.getElementById("documentChecklist").innerHTML = job.documents.map((doc) => {
    const checked = job.completedDocs.includes(doc) ? "checked" : "";
    return `
      <label class="check-item">
        <input type="checkbox" ${checked} onchange="toggleDocument('${job.id}', '${doc.replace(/'/g, "\\'")}')">
        <span><strong>${doc}</strong><br><span class="muted-text">${job.client} - ${job.service}</span></span>
      </label>
    `;
  }).join("");
}

function renderLedger() {
  document.getElementById("ledger").innerHTML = filteredJobs().map((job) => `
    <div class="ledger-row">
      <div>
        <strong>${job.id} - ${job.client}</strong>
        <div class="muted-text">${job.service} | Paid ${rupee.format(job.paid)} | Portal fee ${rupee.format(job.expense)}</div>
      </div>
      <button class="ghost-btn" onclick="selectJob('${job.id}')">Receipt</button>
    </div>
  `).join("");
}

function renderReceipt() {
  const job = selectedJob();
  document.getElementById("receipt").innerHTML = `
    <h3>Advocate CRM Receipt</h3>
    <p class="muted-text">Receipt for ${job.id}</p>
    <div class="receipt-row"><span>Client</span><strong>${job.client}</strong></div>
    <div class="receipt-row"><span>Service</span><strong>${job.service}</strong></div>
    <div class="receipt-row"><span>Total fee</span><strong>${rupee.format(job.fee)}</strong></div>
    <div class="receipt-row"><span>Paid</span><strong>${rupee.format(job.paid)}</strong></div>
    <div class="receipt-row"><span>Balance</span><strong>${rupee.format(Math.max(job.fee - job.paid, 0))}</strong></div>
    <div class="receipt-row"><span>Status</span><strong>${job.status}</strong></div>
  `;
}

function renderReports() {
  const serviceCounts = state.jobs.reduce((acc, job) => {
    acc[job.service] = (acc[job.service] || 0) + 1;
    return acc;
  }, {});
  const max = Math.max(...Object.values(serviceCounts));
  document.getElementById("serviceReport").innerHTML = Object.entries(serviceCounts).map(([service, count]) => `
    <div class="bar-row">
      <header><strong>${service}</strong><span>${count} jobs</span></header>
      <div class="bar-track"><span style="width:${(count / max) * 100}%"></span></div>
    </div>
  `).join("");

  const totalFee = state.jobs.reduce((sum, job) => sum + job.fee, 0);
  const paid = state.jobs.reduce((sum, job) => sum + job.paid, 0);
  const expenses = state.jobs.reduce((sum, job) => sum + job.expense, 0);
  const pending = totalFee - paid;
  document.getElementById("financeReport").innerHTML = [
    ["Gross billing", totalFee],
    ["Collected", paid],
    ["Pending", pending],
    ["Portal expenses", expenses],
    ["Net after portal fees", paid - expenses]
  ].map(([label, value]) => `
    <div class="summary-row"><span>${label}</span><strong>${rupee.format(value)}</strong></div>
  `).join("");
}

function selectJob(id) {
  state.selectedJobId = id;
  renderChecklist();
  renderReceipt();
}

function toggleDocument(jobId, documentName) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  if (job.completedDocs.includes(documentName)) {
    job.completedDocs = job.completedDocs.filter((item) => item !== documentName);
  } else {
    job.completedDocs.push(documentName);
  }
  saveJobs();
  renderChecklist();
}

function selectedJob() {
  return state.jobs.find((job) => job.id === state.selectedJobId) || state.jobs[0];
}

function statusClass(status) {
  if (status === "Processing") return "processing";
  if (status === "Pending Payment") return "payment";
  if (status === "Completed") return "completed";
  return "";
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function saveJobs() {
  localStorage.setItem("advocateCrmJobs", JSON.stringify(state.jobs));
}
