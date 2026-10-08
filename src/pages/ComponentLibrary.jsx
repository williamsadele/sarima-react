import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import List from "../components/ui/List";
import Alert from "../components/ui/Alert";
import Spinner from "../components/ui/Spinner";
 
/**
 * ComponentLibrary
 * One page that renders every UI component in every documented state.
 * Route: /components (registered in App.jsx)
 */
 
const sectionStyle = { display: "flex", flexDirection: "column", gap: "16px" };
const rowStyle = { display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "flex-start" };
const noteStyle = { color: "var(--color-text-muted)", margin: 0 };
 
const sampleItems = [
  { id: 1, name: "Dashboard designs" },
  { id: 2, name: "Landing pages" },
  { id: 3, name: "Logo concepts" },
];
 
export default function ComponentLibrary() {
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
 
  // Interactive validation demo: error shows once something is typed
  // that doesn't look like an email.
  const emailError = email && !email.includes("@") ? "Please enter a valid email address." : "";
 
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };
 
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "56px", fontFamily: "var(--font-family-base)" }}>
      <h1>Component Library</h1>
      <p style={noteStyle}>
        Every component below is built from the design tokens in
        src/styles/tokens.css. Hover, click and tab through them to see each state.
      </p>
 
      {/* ---------------- BUTTON ---------------- */}
      <section style={sectionStyle}>
        <h2>Button</h2>
        <div style={rowStyle}>
          <div><p>Primary - default</p><Button variant="primary">Get Started</Button></div>
          <div><p>Secondary - default</p><Button variant="secondary">Cancel</Button></div>
          <div><p>Danger - default</p><Button variant="danger">Delete</Button></div>
          <div><p>Disabled</p><Button variant="primary" disabled>Get Started</Button></div>
          <div><p>Loading</p><Button variant="primary" loading>Get Started</Button></div>
          <div>
            <p>Loading (click me)</p>
            <Button variant="primary" loading={saving} onClick={handleSave}>Save</Button>
          </div>
        </div>
        <p style={noteStyle}>Hover and focus states: move your mouse over a button, or press Tab.</p>
      </section>
 
      {/* ---------------- INPUT ---------------- */}
      <section style={sectionStyle}>
        <h2>Input</h2>
        <div style={rowStyle}>
          <div>
            <p>Empty (placeholder)</p>
            <Input label="Email" placeholder="you@example.com" />
          </div>
          <div>
            <p>Filled</p>
            <Input label="Name" defaultValue="Williams Adele" />
          </div>
          <div>
            <p>Error</p>
            <Input label="Email" defaultValue="not-an-email" error="Please enter a valid email address." />
          </div>
          <div>
            <p>Disabled</p>
            <Input label="Username" defaultValue="locked" disabled />
          </div>
          <div>
            <p>Live validation (type here)</p>
            <Input
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
          </div>
        </div>
        <p style={noteStyle}>Hover and focus states: hover over a field, then click into it.</p>
      </section>
 
      {/* ---------------- CARD ---------------- */}
      <section style={sectionStyle}>
        <h2>Card</h2>
        <div style={rowStyle}>
          <div>
            <p>With image, text and footer</p>
            <Card
              image="/images/expimg1.jfif"
              title="Daniel Photos"
              description="A bold red portrait illustration."
              footer={<Button variant="secondary">View shot</Button>}
            />
          </div>
          <div>
            <p>Text only (no image)</p>
            <Card title="Branding" description="A card does not need an image to look right." />
          </div>
          <div>
            <p>Image only (empty body)</p>
            <Card image="/images/expimg2.jfif" />
          </div>
        </div>
        <p style={noteStyle}>Hover state: move your mouse over a card and it lifts slightly.</p>
      </section>
 
      {/* ---------------- LIST ---------------- */}
      <section style={sectionStyle}>
        <h2>List</h2>
        <div style={rowStyle}>
          <div>
            <p>With items</p>
            <List items={sampleItems} renderItem={(item) => item.name} />
          </div>
          <div>
            <p>Loading</p>
            <List loading />
          </div>
          <div>
            <p>Empty</p>
            <List items={[]} emptyMessage="No designs found. Try another search." />
          </div>
        </div>
      </section>
 
      {/* ---------------- FEEDBACK ---------------- */}
      <section style={sectionStyle}>
        <h2>Feedback (Alert and Spinner)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Alert type="success">Your design was uploaded successfully.</Alert>
          <Alert type="error">Something went wrong. Please try again.</Alert>
          <Alert type="warning">Your storage is almost full.</Alert>
          <Alert type="info">New shots are added every day.</Alert>
        </div>
        <div style={rowStyle}>
          <div><p>Spinner (small)</p><Spinner size={16} /></div>
          <div><p>Spinner (default)</p><Spinner /></div>
          <div><p>Spinner (large)</p><Spinner size={40} /></div>
        </div>
      </section>
    </div>
  );
}