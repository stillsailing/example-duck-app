export default async function delay(timeout: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, timeout))
}
