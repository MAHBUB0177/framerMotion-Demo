"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* -------------------- Types -------------------- */

type FileType = "image" | "pdf" | "unknown";

interface PartnerItem {
  id: number;
  name: string;
  file: string;
}

/* -------------------- Component -------------------- */

const TaraPartner: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PartnerItem | null>(null);

  const dataWithFiles: PartnerItem[] = [
    {
      id: 1,
      name: "Life Style Partner",
      file: "/images/partners/lifestyle.png",
    },
    {
      id: 2,
      name: "Dining Partner",
      file: "https://brackweb.s3.ap-southeast-1.amazonaws.com/uploads/all/1759236162_SoC-Retail-Deposits-01-10-202568e5e71249123.pdf",
    },
    {
      id: 3,
      name: "Special Offer Partner",
      file: "https://brackweb.s3.ap-southeast-1.amazonaws.com/uploads/all/1759236162_SoC-Retail-Deposits-01-10-202568e5e71249123.pdf",
    },
  ];

  /* -------------------- Helpers -------------------- */

  const getFileTypeFromUrl = (url?: string): FileType => {
    if (!url) return "unknown";

    const extension = url.split(".").pop()?.toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension ?? "")) {
      return "image";
    }
    if (extension === "pdf") {
      return "pdf";
    }
    return "unknown";
  };

  const fileType: FileType = getFileTypeFromUrl(selectedItem?.file);

  /* -------------------- Render -------------------- */

  return (
    <>
      {/* List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dataWithFiles.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white text-black text-lg shadow border border-slate-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </motion.div>
        ))}
      </div>

      {/* Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full"
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">
                {selectedItem.name}
              </h2>

              {/* Image Preview */}
              {fileType === "image" && (
                <div className="relative w-full h-[400px]">
                  <Image
                    src={selectedItem.file}
                    alt={selectedItem.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* PDF Preview */}
              {fileType === "pdf" && (
                <div className="w-full h-[80vh] bg-white overflow-hidden">
                  <iframe
                    src={`${selectedItem.file}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-full border-0 outline-none block bg-transparent"
                    title="PDF Preview"
                  />
                </div>
              )}

              {/* Unknown */}
              {fileType === "unknown" && (
                <p className="text-gray-500">Unsupported file type</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TaraPartner;
