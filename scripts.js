function copyCode(id) {
    var codeElement = document.getElementById(id);
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(codeElement);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
        var successful = document.execCommand('copy');
        if (successful) {
            alert('コピー成功！');
        } else {
            throw new Error('コピーコマンドが失敗しました');
        }
    } catch (err) {
        alert('コピーに失敗しました。テキストが選択されました。手動でコピーしてください。');
    }
}
