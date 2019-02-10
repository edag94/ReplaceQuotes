import * as vscode from 'vscode';

export default (textEditor: vscode.TextEditor, ToSingle : boolean) => {
    const text = textEditor.document.getText();
    let replacee, replacer;
    if (ToSingle){
        replacee = '\"';
        replacer = '\'';
    } else {
        replacee = '\'';
        replacer = '\"';
    }

    const replacedText = replaceString(text, replacee, replacer);

    const firstLineIdx = 0;
    const firstLineRef = textEditor.document.lineAt(firstLineIdx);
    const firstChar = firstLineRef.range.start.character;

    const lastLineIdx = textEditor.document.lineCount - 1;
    const lastLineRef = textEditor.document.lineAt(lastLineIdx);
    const lastChar = lastLineRef.range.end.character
    
    const textRange = new vscode.Range(0,
    firstChar,
    textEditor.document.lineCount - 1,
    lastChar);

    textEditor.edit(editBuilder => {
        editBuilder.replace(textRange,replacedText);
    });
}

function replaceString(str: string, replacee: string, replacement: string) : string {
    const regexStr = '/' + replacee + '/';
    const regexFlags = 'g';
    const regex = new RegExp(regexStr, regexFlags);

    const replaced = str.replace(regex, replacement);
    return replaced;
}