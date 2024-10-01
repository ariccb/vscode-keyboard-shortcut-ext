import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

const outputChannel = vscode.window.createOutputChannel("Shortcut Learning");

export class KeyboardHelperExtension {
  constructor(context) {
    this.context = context;
    this.keybindings = this.loadKeybindings();
    this.registerCommandListener();
    console.log("KeyboardHelperExtension initialized with", this.keybindings.length, "keybindings");
    outputChannel.appendLine("KeyboardHelperExtension initialized");
  }

  loadKeybindings() {
    const useCustomKeybindings = vscode.workspace.getConfiguration("shortcutLearning").get("useCustomKeybindings");
    if (useCustomKeybindings) {
      return this.loadCustomKeybindings();
    } else {
      return this.loadDefaultKeybindings();
    }
  }

  loadCustomKeybindings() {
    const keybindingsPath = path.join(os.homedir(), ".config", "Code", "User", "keybindings.json");
    try {
      const keybindingsContent = fs.readFileSync(keybindingsPath, "utf8");
      return JSON.parse(keybindingsContent);
    } catch (error) {
      console.error("Error loading custom keybindings:", error);
      return [];
    }
  }

  loadDefaultKeybindings() {
    // Load default keybindings from a JSON file in your extension
    const defaultKeybindingsPath = path.join(this.context.extensionPath, "src", "defaultKeybindings.json");
    try {
      const keybindingsContent = fs.readFileSync(defaultKeybindingsPath, "utf8");
      return JSON.parse(keybindingsContent);
    } catch (error) {
      console.error("Error loading default keybindings:", error);
      return [];
    }
  }

  registerCommandListener() {
    this.context.subscriptions.push(
      vscode.commands.registerCommand("shortcutLearning.showLastUsedCommand", () => {
        this.showLastUsedCommand();
      })
    );

    vscode.commands.onDidExecuteCommand(this.onCommandExecuted.bind(this));
  }

  onCommandExecuted(command) {
    console.log("Command executed:", command);
    outputChannel.appendLine(`Command executed: ${command}`);
    const shortcut = this.keybindings.find((kb) => kb.command === command);
    if (shortcut) {
      this.showShortcutNotification(command, shortcut.key);
    }
  }

  showShortcutNotification(command, shortcut) {
    vscode.window.showInformationMessage(
      `You just used the command "${command}". Next time, try using the keyboard shortcut: ${shortcut}`
    );
  }

  showLastUsedCommand() {
    vscode.window.showInformationMessage("Last used command: " + (this.lastCommand || "None"));
  }
}
