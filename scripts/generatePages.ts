import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const DATA_DIR = path.join(process.cwd(), "data");
const PAGES_DIR = path.join(process.cwd(), "app/pages");

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const template = (id: string, title: string, content: string) => `export default function Page() {
  return (
    <article>
      <h1>${title}</h1>
      <p>${content}</p>
    </article>
  );
}`;

const files = fs.readdirSync(DATA_DIR);
files.forEach((file) => {
  const id = path.parse(file).name;
  const filePath = path.join(DATA_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(content) as { title: string; content: string };

  const pagePath = path.join(PAGES_DIR, `${id}.tsx`);
  fs.writeFileSync(pagePath, template(id, data.title, data.content));
  console.log(`Generated: ${pagePath}`);
});

console.log("✅ All pages generated!");
