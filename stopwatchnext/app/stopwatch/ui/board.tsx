export default function Board({contents}) {
  return (
    <div>
      <div>
      {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </div>
    </div>
  )
}