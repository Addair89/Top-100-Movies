export const getData = async <T>(url: string, options: object): Promise<T> => {
    const response = await fetch(url, options)
    return await response .json()
}