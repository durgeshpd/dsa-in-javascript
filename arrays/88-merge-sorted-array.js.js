/* 
// Brute Force Approch O((m + n) log(m + n))

function merge(nums1, nums2, m, n) {
    
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    return nums1.sort((a, b) => a - b);
}
 */

// Optimized Approch 0(m + n)

function merge(nums1, nums2, m, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
}

let nums1 = [1 , 2, 3, 0, 0, 0], nums2 = [2, 5, 6], m = 3, n = 3;
console.log(merge(nums1, nums2, m, n));