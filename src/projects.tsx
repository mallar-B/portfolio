const projects = [
  {
    description: {
      title: "Chess-Room",
      description: "A platform for teaching chess",
      about: (
        <div>
          A SaaS-based virtual classroom platform where users can register as
          either a teacher or a student, enabling interactive and controlled
          learning environments.
          <br />
          <br />
          <span className="text-xl font-extrabold underline">Highlights:</span>
          <ul className="list-disc pl-8 pt-2">
            <li className="py-1">
              <span className="font-bold">Interactive Virtual Board:</span>{" "}
              Real-time collaboration with fine-grained access control.
              Enable/disable actions like drawing, solving problems, or making
              moves.{" "}
            </li>
            <li className="py-1">
              <span className="font-bold"> Real-Time Communication:</span>{" "}
              Leveraged WebSockets and Agora RTC for low-latency (
              <strong>&lt;50ms</strong>) interaction.
            </li>
            <li className="py-1">
              <span className="font-bold">
                Role-Based Dynamic Access Control:
              </span>{" "}
              Teacher can manage classroom behavior, audio/video permissions,
              and student interactions. Control who can make moves on the
              virtual board and participate in discussions.
            </li>
            <li className="py-1">
              <span className="font-bold">SaaS Architecture:</span> Scalable to
              support multiple classrooms and institutions simultaneously.
            </li>
          </ul>
        </div>
      ),
      techStacks: [
        "Next.js",
        " Node.js",
        "Socket.io",
        "PostgreSQL",
        "OAuth2.0",
        "Zustand",
        "Agora / WebRTC",
      ],
    },
    imageLink: "/chess_room_ss.jpg",
    videoLink: "/chess_room_video.mp4",
    siteLink: "https://chessroom-ubny.onrender.com/",
    sourceLink: "https://github.com/mallar-B",
  },
  {
    description: {
      title: "Packet-Send",
      description: "A peer-to-peer file sharing tool",
      about: (
        <div>
          A real-time file sharing platform that enables direct peer-to-peer
          transfers without any server-side storage. Users can switch between
          Share and Receive modes to instantly exchange files using unique room
          codes.
          <br />
          <br />
          <span className="text-xl font-extrabold underline">Highlights:</span>
          <ul className="list-disc pl-8 pt-2">
            <li className="py-1">
              <span className="font-bold">Peer-to-Peer Transfers:</span>{" "}
              Utilizes WebRTC for direct connection between devices—ensuring
              fast, secure, and serverless file sharing.
            </li>
            <li className="py-1">
              <span className="font-bold">Ably-Powered Signaling:</span>{" "}
              Real-time signaling implemented using Ably Pub/Sub channels to
              establish and coordinate WebRTC connections.
            </li>
            <li className="py-1">
              <span className="font-bold">Optimized Chunked Uploads:</span>{" "}
              Smart chunking with buffer thresholds and flow control to maximize
              performance and reliability of large file transfers.
            </li>
            <li className="py-1">
              <span className="font-bold">Lightweight & Instant:</span> No
              sign-up or login required. Users can start sending and receiving
              files in seconds with just a room code.
            </li>
          </ul>
        </div>
      ),
      techStacks: [
        "Next.js",
        "Tailwind CSS",
        "SimplePeer / WebRTC",
        "Ably / WebSockets",
      ],
    },
    imageLink: "/packet_send_ss.jpg",
    videoLink: "/packet_send_video.mp4",
    siteLink: "https://packet-send.vercel.app",
    sourceLink: "https://github.com/mallar-B/packet-send",
  },
];
export default projects;
