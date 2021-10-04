/**
 * Converts the `react-hook-form`'s register function to be useable by the Material
 * Input components.
 */
export default function materialRegister(register, ...args) {
  const { ref, ...rest } = register(...args);
  return { inputRef: ref, ...rest };
}
