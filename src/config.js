export const API_URL = 'https://6336fad05327df4c43cd9204.mockapi.io/Content'

export function formatter(amountStr) {
    // Chuyển string sang số
    const amount = Number(amountStr);
    if (isNaN(amount)) return ''; // nếu không phải số thì trả về rỗng hoặc xử lý khác

    // Format tiền VND
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
}