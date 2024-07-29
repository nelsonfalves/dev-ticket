"use client";

import { selectTicketKindAction } from "@/actions";

export type TicketKindSelectProps = {
  defaultValue: "full" | "half";
  price: number;
};

export function TicketKindSelect(props: TicketKindSelectProps) {
  return (
    <>
      <label htmlFor="ticket-type">Choose ticket type</label>
      <select
        name="ticket-type"
        id="ticket-type"
        className="mt-2 rounded-lg bg-input px-4 py-[14px]"
        defaultValue={props.defaultValue}
        onChange={async (e) => {
          await selectTicketKindAction(e.target.value as any);
        }}
      >
        <option value="full">Full</option>
        <option value="half">Half</option>
      </select>
    </>
  );
}
