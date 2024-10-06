//1. Unique chars in a string.
// write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase.


function unique_chars_test (str) {
    let count_dict = {}
    for (let i = 0; i < str.length; i++) {
        let current_char = str[i]
        if (current_char in count_dict) {
            return false
        }
        count_dict[current_char] = 1
    }
    return true
}

console.log(unique_chars_test('liam'))
console.log(unique_chars_test('sheilla'))

//2. Merge Sorted Arrays
// Given two sorted arrays nums1 and nums2, write a function to merge them into a single sorted array

let nums1 = [7,10,15,22]
let nums2 = [5,6,7,8,9]

function merged_sorted_arrays (arr1, arr2) {
    let merged_array = [...arr1,...arr2].sort((a,b)=>a-b)
    console.log(merged_array)
}

merged_sorted_arrays(nums1, nums2)

//3. Find all duplicates in an Array
// Given an array of integers where 1 <= a[i] <= n (n is size of the array), some elements appear twie and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity and O(1) extra space complexity.

let arr3 = [1,2,3,4,4,5,5,6]

function duplication_finder (arr) {
    let duplication_arr = []
    let count_dictionary = {}

    for (let current_value of arr) {
        if (current_value in count_dictionary) {
            duplication_arr.push(current_value)
        } else {
            count_dictionary[current_value] = 1
        }
    }
    return duplication_arr
}

console.log(duplication_finder(arr3))

//4. Rotate an array to the right by k steps, where k is non-negative

let start_array = [1,2,3,4,5,6]
let k = 3
let finish_array = [4,5,6,1,2,3]

function rotate_array (nums, k) {
    let end_values = nums.slice(k)
    let start_values = nums.slice(0,k)
    let new_array = [...end_values, ...start_values]
    return new_array
}

console.log(rotate_array(start_array,k))

//5. valid parenthesis
// Questions: Given a string s containing just the chars '(', '), '{', '}', '[' and ']',
// determine if the input string is valid. An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let valid_string = '(){}[]'
let invalid_string = '((){}[]'

function string_tester (str) {
    const combos = {
        '{':'}',
        '(':')',
        '[':']'
    }

    let stack = []

    for (let current_bracket of str) {
        if (stack.length == 0) {
            stack.push(current_bracket)
        } else if (current_bracket in combos) {
            stack.push(current_bracket)
        } else {
            let last_value_on_stack = stack[stack.length -1]
            if (!(last_value_on_stack in combos)) {
                stack.push(current_bracket)
            } else {
                if (combos[last_value_on_stack] === current_bracket) {
                    stack.pop()
                }
            }
        }
    }
    return stack.length === 0
}

console.log(string_tester(valid_string))
console.log(string_tester(invalid_string))