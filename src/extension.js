import * as vscode from "vscode";
import { KeyboardHelperExtension } from "./KeyboardHelperExtension";

export function activate(context) {
  console.log("Shortcut Learning extension is now active!");

  const extension = new KeyboardHelperExtension(context);
  context.subscriptions.push(extension);

  let disposable = vscode.commands.registerCommand("shortcutLearning.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from Shortcut Learning!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
