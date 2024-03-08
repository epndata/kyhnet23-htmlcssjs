export const validateName = (value) => {
    if (value.length >= 2)
        return true

    return false
}