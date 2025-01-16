"use client";
import styles from "./styles.module.scss";
import Block from "./components/Block";
import { useEffect, useState } from "react";
import apiClient from "./services/apiClient";
import { useBlockData } from "./hooks/useBlockData";
import { useSubmitBlocks } from "./hooks/useSubmitBlocks";


export default function Home() {

  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const { blocks, loading, error } = useBlockData();
  const { loading: submitLoading, handleSubmit } = useSubmitBlocks();

  const handleCheck = (blockId, type, selected) => {
    console.log("type", type);

    if (type === "single") {
      selected ? setSelectedBlocks([blockId]) : setSelectedBlocks([])
    } else {

      setSelectedBlocks((prev) => {
        const hasSingleBlock = prev.some((id) => {
          const block = blocks.find((b) => b._id === id);
          return block && block.type === "single";
        });

        if (hasSingleBlock) {
          return [blockId];
        }

        return prev.includes(blockId)
          ? prev.filter((id) => id !== blockId)
          : [...prev, blockId];
      });
    }
  };

  const submitHandler = async () => {
    const success = await handleSubmit(selectedBlocks, blocks);
    if (success) {
      setSelectedBlocks([])
      console.log('Submission successful:', selectedBlocks);
    }
    
  };

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.main}>
        {loading && "loading...."}
        {blocks.map((block) => (
          <Block
            key={block._id}
            selected={selectedBlocks.includes(block._id)}
            {...block}
            onCheck={(selected) => handleCheck(block._id, block.type, selected)}
          />
        ))}
      </div>
      <button
        className={styles.btnMain}
        disabled={loading || selectedBlocks.length === 0}
        onClick={submitHandler}
      >
        {submitLoading ? "Submitting..." : "Submit"}
      </button>
    </main>
  );
}
