import { studentClassOne, studentClassTwo } from "../data/studentlists";
import Student from "./Student";

export default function StudentLists() {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class One
            </td>
          </tr>

          {studentClassOne.map((student) => (
            <Student key={student.id} student={student} />
          ))}

          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Two
            </td>
          </tr>
          {studentClassTwo.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
