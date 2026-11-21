"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import {
  DEFAULT_PEOPLE,
  MAX_MEMO_LENGTH,
  MAX_PEOPLE,
  MIN_PEOPLE,
} from "@/constants/trip";
import { useNoticeContext } from "@/contexts/NoticeContext";
import useCreateTripMutation from "@/features/trips/hooks/useCreateTripMutation";
import * as styles from "./TripForm.css";

function TripForm({ campsiteId }) {
  const router = useRouter();
  const { showNotice } = useNoticeContext();
  const [people, setPeople] = useState(DEFAULT_PEOPLE);
  const [memo, setMemo] = useState("");
  const peopleInputRef = useRef(null);
  const { mutate, isPending, isSuccess, error } = useCreateTripMutation();

  function handlePeopleChange(event) {
    setPeople(Number(event.currentTarget.value));
  }

  function handleMemoChange(event) {
    setMemo(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    mutate(
      { campsiteId, people, memo },
      {
        onSuccess: () => {
          showNotice("계획을 추가했습니다.");
          router.push("/trips");
        },
        onError: () => {
          peopleInputRef.current?.focus();
        },
      },
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>캠핑 계획 추가</h2>
      <TextField
        ref={peopleInputRef}
        label={`인원(${MIN_PEOPLE}~${MAX_PEOPLE}명)`}
        type="number"
        name="people"
        value={people}
        onChange={handlePeopleChange}
        error={error?.message}
      />
      <label className={styles.field}>
        메모
        <textarea
          className={styles.textarea}
          name="memo"
          maxLength={MAX_MEMO_LENGTH}
          value={memo}
          onChange={handleMemoChange}
        />
      </label>
      <p className={styles.preview}>
        캠핑장 {campsiteId}번 · {people}명 · {memo || "메모 없음"}
      </p>
      <Button type="submit" disabled={isPending || isSuccess}>
        계획 추가
      </Button>
    </form>
  );
}

export default TripForm;
