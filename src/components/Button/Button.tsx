export default function Button() {
  return <button className="bg-black text-white rounded-md">Testkun</button>;
}

export function ButtonRounded({title}: {title: string}) {
  return <button className="bg-black text-white rounded-md p-2">Title {title}</button>;
}

export function ButtonRoundedSubmit({title, isEnable}: {title: string, isEnable: boolean}) {
  if (isEnable) {
    return <button className="bg-green-500 text-white">{title}</button>
  }
  return <button className="bg-gray-900 text-white" disabled>{title}</button>

}