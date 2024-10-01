import * as assert from "assert";
import * as vscode from "vscode";
import * as myExtension from "../../extension";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Extension should be present", () => {
    assert.ok(vscode.extensions.getExtension("ariccb.shortcut-learning-for-mac"));
  });

  test("Should activate", async () => {
    const ext = vscode.extensions.getExtension("ariccb.shortcut-learning-for-mac");
    if (!ext) {
      throw new Error("Extension not found");
    }
    await ext.activate();
    assert.strictEqual(ext.isActive, true);
  });

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
