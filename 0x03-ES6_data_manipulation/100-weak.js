// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint already exists in the weakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if it doesn't exist
    weakMap.set(endpoint, 0);
  }

  // Increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count exceeds or equals 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
