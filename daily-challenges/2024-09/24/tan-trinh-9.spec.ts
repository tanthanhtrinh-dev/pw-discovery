//Javascript
// Format date

// ✅ Version 1 — Chấp nhận cả string lẫn Date
function formatToDDMMYYYY(input: Date | string): string {

    // Convert string → Date nếu cần
    const date = typeof input === 'string' ? new Date(input) : input;

    // ✅ Validate: kiểm tra Invalid Date
    if (isNaN(date.getTime())) {
        throw new Error(`Invalid date input: "${input}"`);
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// Test cases
console.log(formatToDDMMYYYY('2006/10/05'));       // ✅ 05/10/2006
console.log(formatToDDMMYYYY('2024-01-31'));       // ✅ 31/01/2024
console.log(formatToDDMMYYYY(new Date()));         // ✅ ngày hôm nay
//console.log(formatToDDMMYYYY('invalid'));          // ❌ throws Error