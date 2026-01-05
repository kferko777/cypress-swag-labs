export function findElementByText(
  $body: JQuery<HTMLElement>,
  selector: string,
  text: string
) {
  const target = text.trim().toLowerCase();
  return $body.find(selector).filter((_, el) =>
    el.textContent?.trim().toLowerCase() === target
  );
}