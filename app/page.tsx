import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        Project TITLE
      </div>
      <div>
        SAVE Project (ctrl + S) to a file
      </div>
      <div>
        OPEN Project (ctrl + o) overwrite current project IF NOT SAVED!!!
      </div>
      <div>
        SHARE Project (ctrl + l OR OTHER SHORTCUT (if anyone has any idea how to implement this, I am open to suggestions.))
      </div>

      <div>
        List of characters : <Link href={`/characters`}>here</Link>
      </div>

      <div>
        List of scenes : <Link href={`/scenes`}>here</Link>
      </div>

      <div>
        Scripting : <Link href={`/script`}>here</Link>
      </div>

      <div>
        Whiteboard : <Link href={`/whiteboard`}>here</Link>
      </div>
    </div>
  );
}
