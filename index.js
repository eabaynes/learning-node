// EcmaScript Modules
import { promises as fs } from "fs";

const data = await fs.readFile("users.json", "utf-8");

await fs.writeFile("users-copy.json", data);
