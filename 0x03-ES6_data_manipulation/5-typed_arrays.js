const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length); // Create a new ArrayBuffer of the given length
  const int8View = new Int8Array(buffer); // Create a typed array view of Int8 type

  // Check if the position is outside the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8View[position] = value;

  return buffer;
};

export default createInt8TypedArray;
