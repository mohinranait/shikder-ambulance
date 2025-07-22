"use client";

import { useImg } from "@/providers/ImageProvider";
import React, { useEffect, FC, useMemo, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Create a wrapper component that forwards the ref
const ReactQuillWrapper = dynamic(
  async () => {
    const { default: ReactQuill } = await import("react-quill-new");

    // Create a forwardRef wrapper
    const QuillComponent = React.forwardRef<any, any>((props, ref) => {
      return <ReactQuill ref={ref} {...props} />;
    });

    QuillComponent.displayName = "ReactQuill";
    return QuillComponent;
  },
  {
    ssr: false,
    loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  }
);

type Props = {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
};

const QuillEditor: FC<Props> = ({ editorValue, setEditorValue }) => {
  const [quillInstance, setQuillInstance] = useState<any>(null);
  const { selectedImage, setSelectedImage, setImageModal } = useImg();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering ReactQuill
  useEffect(() => {
    setMounted(true);
  }, []);

  const imageHandler = useCallback(() => {
    setImageModal(true);
  }, [setImageModal]);

  useEffect(() => {
    if (selectedImage && quillInstance && mounted) {
      try {
        const url = selectedImage?.fileUrl;

        if (url) {
          const range = quillInstance.getSelection();
          if (range) {
            quillInstance.insertEmbed(range.index, "image", url);
          }
        }

        setImageModal(false);
        setSelectedImage(null);
      } catch (error) {
        console.error("Error inserting image:", error);
        setImageModal(false);
        setSelectedImage(null);
      }
    }
  }, [selectedImage, setImageModal, setSelectedImage, quillInstance, mounted]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000", // Black
                "#FFFFFF", // White
                "#FF0000", // Red
                "#00FF00", // Green
                "#0000FF", // Blue
                "#FFFF00", // Yellow
                "#FFA500", // Orange
                "#800080", // Purple
                "#808080", // Gray
                "#00FFFF", // Cyan
                "#FFC0CB", // Pink
                "#8B0000", // Dark Red
                "#006400", // Dark Green
                "#00008B", // Dark Blue
                "#FFD700", // Gold
                "#A52A2A", // Brown
                "#800000", // Maroon
                "#4B0082", // Indigo
                "#F0E68C", // Khaki
                "#B0E0E6", // Powder Blue
              ],
            },
          ],
          [{ align: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [imageHandler]);

  // Custom ref callback to get the ReactQuill instance
  const reactQuillRef = useCallback((reactQuillComponent: any) => {
    if (reactQuillComponent?.getEditor) {
      const editor = reactQuillComponent.getEditor();
      setQuillInstance(editor);
    }
  }, []);

  // Don't render until mounted (client-side only)
  if (!mounted) {
    return <div className="h-32 bg-gray-100 animate-pulse rounded" />;
  }

  return (
    <div className="quill-editor">
      <ReactQuillWrapper
        theme="snow"
        value={editorValue}
        modules={modules}
        onChange={setEditorValue}
        ref={reactQuillRef}
      />
    </div>
  );
};

export default QuillEditor;
