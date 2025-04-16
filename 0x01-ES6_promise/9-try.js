function guardrail(mathFunction) {
  const queue = []; // Initialize the queue array
  try {
    const result = mathFunction(); // Try executing the math function
    queue.push(result); // If successful, push the result to the queue
  } catch (error) {
    queue.push(error.message); // If an error occurs, push the error message to the queue
  }
  queue.push('Guardrail was processed'); // Always push this message to the queue
  return queue;
}

