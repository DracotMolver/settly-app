export function getRestOfStates(hasError, isSuccess) {
  const otherStates = {};

  if (hasError) {
    otherStates.color = "error";
  } else if (isSuccess) {
    otherStates.color = "success";
  }

  return otherStates;
}
