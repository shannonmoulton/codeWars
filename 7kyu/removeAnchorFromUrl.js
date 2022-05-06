function removeUrlAnchor(url) {
    if (url.includes('#')) {
        let anchor = url.indexOf('#')
        return url.substring(0, anchor)
    }
    return url
}
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386