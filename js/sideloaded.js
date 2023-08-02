async function copyEmail() {
    await navigator.clipboard.writeText('rosemoe168@gmail.com')
    btf.snackbarShow('Email copied!')
}

document.querySelector('a[title="Email"]').target = '_self'