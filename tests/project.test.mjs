import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import config from "../src/config.js";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("business contact information is present and preserved", () => {
  assert.equal(config.business.name, "aicareio");
  assert.equal(config.contact.phoneDisplay, "+91 82098 18868");
  assert.equal(config.contact.email, "designerstudio597@gmail.com");
  assert.equal(config.contact.whatsappNumber, "918209818868");
});

test("the service catalogue contains the seven requested service areas", () => {
  const names = config.serviceGroups.map((group) => group.category);
  assert.equal(names.length, 7);
  for (const expected of ["Generative AI & LLM Development", "RAG Systems & AI Agents", "Machine Learning", "Computer Vision & OCR", "Web Development & APIs", "Data Analytics", "IT & Technical Support"]) {
    assert.ok(names.includes(expected), `Missing service group: ${expected}`);
  }
  assert.ok(config.serviceGroups.every((group) => group.items.length > 0));
});

test("the delivery process has five complete stages", () => {
  assert.equal(config.process.length, 5);
  assert.deepEqual(config.process.map((step) => step.step), ["01", "02", "03", "04", "05"]);
  assert.ok(config.process.every((step) => step.title && step.description));
});

test("portfolio content does not publish unverified performance metrics", () => {
  assert.ok(config.featuredProjects.length >= 2);
  assert.ok(config.featuredProjects.every((project) => !("metrics" in project)));
  assert.ok(config.featuredProjects.every((project) => project.problem && project.tech.length));
  assert.ok(config.featuredProjects.some((project) => project.name === "EnterpriseDoc AI"));
  assert.ok(config.featuredProjects.some((project) => project.name === "Voice AI Booking Assistant"));
});

test("Google enquiry form is embedded on the homepage and contact page without external form links", async () => {
  const home = await read("../index.html");
  const contact = await read("../contact.html");
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfNnLaWSJRTxN9x9gAhY7PnUKTkvBBlCb1eMf2dz-BoW6tukg/viewform";
  assert.ok(home.includes(`${formUrl}?embedded=true`));
  assert.ok(contact.includes(`${formUrl}?embedded=true`));
  assert.ok(home.includes(formUrl));
  assert.ok(contact.includes(formUrl));
});

test("multi-page navigation and business proof points are present", async () => {
  const home = await read("../index.html");
  const services = await read("../services.html");
  const company = await read("../company.html");
  const cases = await read("../case-studies.html");
  assert.ok(config.stats.some((item) => item.value === "100+"));
  assert.match(company, /hotel-focused product experience/i);
  assert.match(services, /AI & AUTOMATION/);
  assert.match(company, /100\+/);
  assert.match(cases, /Taking a hotel-focused product to market/);
  assert.match(cases, /EnterpriseDoc AI/);
  assert.match(cases, /Voice AI Booking Assistant/);
});

test("the project enquiry form is embedded without a separate form tab", async () => {
  const contact = await read("../contact.html");
  assert.ok(contact.includes("1FAIpQLSfNnLaWSJRTxN9x9gAhY7PnUKTkvBBlCb1eMf2dz-BoW6tukg/viewform?embedded=true"));
  assert.doesNotMatch(contact, /Open the form in a new tab/);
});

