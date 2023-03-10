export const formatName = (name: string) => {
    const formatName = name.split(" ")[1]?.slice(0,3)
    return formatName
}