import React from "react";

import Image from "next/image";
import Link from "next/link";

import { icons, data } from "@/constants";
import { GetFundedButton } from "@/components";

const ChallengeTable = () => {
  const fees = [149, 299, 599];
  const table_data = [
    {
      label: "Fee",
      opt1: `$${fees[0]}`,
      opt2: `$${fees[1]}`,
      opt3: `$${fees[2]}`,
    },
    {
      label: "Profit Target",
      opt1: `$${(8 / 100) * data.price_list[0].val} (8%)`,
      opt2: `$${(8 / 100) * data.price_list[1].val} (8%)`,
      opt3: `$${(8 / 100) * data.price_list[2].val} (8%)`,
    },
    {
      label: "Max Drawdown (5%)",
      opt1: `$${(5 / 100) * data.price_list[0].val}}`,
      opt2: `$${(5 / 100) * data.price_list[1].val}}`,
      opt3: `$${(5 / 100) * data.price_list[2].val}}`,
    },
    {
      label: "Daily Drawdown (3%)",
      opt1: `$${(3 / 100) * data.price_list[0].val}}`,
      opt2: `$${(3 / 100) * data.price_list[1].val}}`,
      opt3: `$${(3 / 100) * data.price_list[2].val}}`,
    },
    {
      label: "Payout Split",
      opt1: "80/20",
      opt2: "80/20",
      opt3: "80/20",
    },
    {
      label: "Platform",
      opt1: "Binance",
      opt2: "Binance",
      opt3: "Binance",
    },
  ];
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="max-w-[850px] flex gap-4 justify-start lg:justify- mx-auto">
          {/* Sidebar */}
          <div className="w-[192px] flex-shrink-0 h-[450px] flex flex-col justify-evenly gap-6 rounded-[16px] border border-[#1C1C1D] bg-[#040A14C7] backdrop-blur-[16.2px] px-4">
            <ul className="list-none text-white text-sm flex flex-col justify-around h-full">
              <li className="opacity-0 pointer-events-none py-4"></li>
              {table_data.map((item, index) => (
                <li key={index} className="py-2">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          {/* Table */}
          <div className="overflow-x-auto rounded-[16px] border border-[#1C1C1D]  min-w-[600px] flex-1">
            <table className="w-full rounded-[16px] h-full bg-[#040A14C7] backdrop-blur-[16.2px] text-sm">
              <thead>
                <tr>
                  {data.price_list.map((item, index) => (
                    <th
                      key={index}
                      className="text-white text-center font-bold py-4 px-2 bg-[#FFFFFF05] border-b border-[#1C1C1D]"
                    >
                      {item.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table_data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center text-white p-2">
                      {item.opt1 === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.opt1
                      )}
                    </td>
                    <td className="text-center text-white p-2">
                      {item.opt2 === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.opt2
                      )}
                    </td>
                    <td className="text-center text-white p-2">
                      {item.opt3 === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.opt3
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADDONS & GET FUNDED BUTTON */}
      <div className="md:flex space-y-5 justify-between p-5 w-full lg:w-[868px] mx-auto">
        <div className="gap-3 md:flex justify-center m-0  items-center ">
          <p className="text-[#7A7A7B] text-[16px] h-full font-semibold text-shadow-lg py-[16px] px-0">
            <Image
              src={icons.plus}
              alt="Live Account"
              className="inline-block"
            />
            Add-Ons
          </p>
          <div className="gap-3  flex ">
            <Link
              href="#"
              className="styled-button font-normal text-[#D9D9DA] text-[10px] lg:text-[14px]   h-[2.5rem]"
            >
              90/10 Share of Gains
            </Link>
            <Link
              href="#"
              className="styled-button font-normal text-[#D9D9DA] text-[10px] lg:text-[14px] h-[2.5rem]"
            >
              Bi Weekly Payouts
            </Link>
          </div>

          <br />
        </div>
        <div className="lg:justify-center lg:items-center lg:flex ">
          <GetFundedButton
            text={`Get Funded`}
            className="styledbutton h-[51px] w-full md:w-[224px] bg-[#E6E6E6] text-black font-mono px-6 py-[14px] rounded-[4px] border-[#00000050] border-[1.5px] shadow-[4px_4px_0px_#00000080] transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_white] text-center"
          />
        </div>
      </div>
    </>
  );
};

export default ChallengeTable;
