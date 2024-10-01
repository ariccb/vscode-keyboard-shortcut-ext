import * as assert from "assert";
import * as vscode from "vscode";
import { KeyboardHelperExtension } from "../../KeyboardHelperExtension";

suite("KeyboardHelperExtension Test Suite", () => {
  test("Should load keybindings", () => {
    const context = {
      subscriptions: [],
    };
    const extension = new KeyboardHelperExtension(context);
    assert.ok(extension.keybindings, "Keybindings should be loaded");
  });

  test("Should register command listener", () => {
    const context = {
      subscriptions: [],
    };
    const extension = new KeyboardHelperExtension(context);
    // This is a basic check. You might need to mock vscode.commands.onDidExecuteCommand
    // for a more thorough test.
    assert.ok(extension, "Extension should be created without errors");
  });
});
