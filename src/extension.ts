import * as vscode from 'vscode';
import replaceQuotes from './replace';

export function activate(context: vscode.ExtensionContext) {
	console.log('Yay');

	const ReplaceSingle : vscode.Disposable = vscode.commands.registerCommand('extension.ReplaceSingle', () => {
		if (vscode.window.activeTextEditor !== undefined){
			const textEditor = vscode.window.activeTextEditor;
			replaceQuotes(textEditor,true);
		} 
		
	});
	const ReplaceDouble = vscode.commands.registerCommand('extension.ReplaceDouble', () => {
		if (vscode.window.activeTextEditor !== undefined){
			const textEditor = vscode.window.activeTextEditor;
			replaceQuotes(textEditor,false);
		} 
	});

	context.subscriptions.push(ReplaceSingle, ReplaceDouble);
}

export function deactivate() {
	console.log(':(');
}
