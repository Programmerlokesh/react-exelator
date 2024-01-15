import avatarImage from "../assets/avatar.png";

export default function Student({ student }) {
  const { score, percentage, serialNumber, studentName } = student;

  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{serialNumber}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={avatarImage}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{studentName}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{score}</td>
      <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
    </tr>
  );
}
