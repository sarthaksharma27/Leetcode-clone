import { problems } from '@/mockProblems/problems';
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import React from 'react';
import Link from 'next/link';

type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  return (
    <tbody className='text-white'>
      {problems.map((doc, idx) => {
        const difficultyColor =
          doc.difficulty === "Easy"
            ? "text-dark-green-s"
            : doc.difficulty === "Medium"
            ? "text-dark-yellow"
            : "text-dark-pink";

        return (
          <tr className={`${idx % 2 === 1 ? 'bg-dark-layer-1' : ''}`} key={doc.id}>
            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
              <BsCheckCircle fontSize={18} />
            </th>
            <td className='px-6 py-4'>
              <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${doc.id}`}>
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>
            <td className={`px-6 py-4 ${doc.category}`}>{doc.category}</td>
            <td className={`px-6 py-4`}>
              {doc.videoId ? (
                <AiFillYoutube 
                  fontSize={'28'}
                  className="cursor-pointer hover:text-red-600"
                />
              ) : (
                <p className='text-gray-400'>Coming soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;
