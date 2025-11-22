export default defineNuxtPlugin(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
    document.head.appendChild(script)

    const script2 = document.createElement('script')
    script2.nomodule = true
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
    document.head.appendChild(script2)
})
