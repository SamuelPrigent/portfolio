export default function ProjectBadge() {
  // V1 - Badge GitHub avec icône code et mini diagramme
  // return (
  //   <span className="from-primary/12 inline-flex items-center gap-2.5 rounded-md border border-primary/25 bg-gradient-to-r to-transparent px-3 py-[1.5px] shadow-sm">
  //     <svg
  //       className="h-[25px] w-[25px] text-primary"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       viewBox="0 0 24 24"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M8 9l3 3-3 3m5 0h3"
  //       />
  //     </svg>
  //     <span className="flex items-end gap-[3px]">
  //       <span className="h-[8px] w-[4px] rounded-t-[1.5px] bg-gradient-to-t from-primary/70 to-primary shadow-sm"></span>
  //       <span className="h-[13px] w-[4px] rounded-t-[1.5px] bg-gradient-to-t from-primary/60 to-primary/90 shadow-sm"></span>
  //       <span className="h-[6px] w-[4px] rounded-t-[1.5px] bg-gradient-to-t from-primary/50 to-primary/80 shadow-sm"></span>
  //       <span className="h-[15px] w-[4px] rounded-t-[1.5px] bg-gradient-to-t from-primary/40 to-primary/70 shadow-sm"></span>
  //     </span>
  //   </span>
  // );
  // V2 - Dossier de projet stylisé avec dégradé
  // return (
  //   <svg
  //     className="h-6 w-6"
  //     style={{ scale: '1.1', position: 'relative', top: '5px', right: '6px' }}
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <defs>
  //       <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //         <stop offset="0%" style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 1 }} />
  //         <stop offset="100%" style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 0.3 }} />
  //       </linearGradient>
  //     </defs>
  //     <path
  //       d="M3 6a2 2 0 012-2h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
  //       fill="url(#folderGradient)"
  //     />
  //     <path
  //       d="M3 6a2 2 0 012-2h4.586a1 1 0 01.707.293l2.414 2.414"
  //       stroke="hsl(341, 100%, 32%)"
  //       strokeWidth="1.5"
  //       strokeLinecap="round"
  //     />
  //   </svg>
  // );

  // V5 - Étoile avec effet brillant
  //   return (
  //     <svg
  //       className="h-6 w-6"
  //       style={{ scale: "1.1", position: "relative", top: "5px", right: "6px" }}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <defs>
  //         <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //           <stop
  //             offset="0%"
  //             style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 1 }}
  //           />
  //           <stop
  //             offset="50%"
  //             style={{ stopColor: "hsl(341, 100%, 45%)", stopOpacity: 0.8 }}
  //           />
  //           <stop
  //             offset="100%"
  //             style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 0.4 }}
  //           />
  //         </linearGradient>
  //       </defs>
  //       <path
  //         d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"
  //         fill="url(#starGradient)"
  //         stroke="hsl(341, 100%, 32%)"
  //         strokeWidth="1.5"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   );
  // V6 - Cube 3D isométrique
  //   return (
  //     <svg
  //       className="h-6 w-6"
  //       style={{ scale: "1.2", position: "relative", top: "5px", right: "6px" }}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <defs>
  //         <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
  //           <stop
  //             offset="0%"
  //             style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 0.4 }}
  //           />
  //           <stop
  //             offset="100%"
  //             style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 0.15 }}
  //           />
  //         </linearGradient>
  //       </defs>
  //       {/* Face avant */}
  //       <path d="M12 12 L6 8 L6 16 L12 20 Z" fill="url(#cubeGradient1)" />
  //       {/* Face droite */}
  //       <path
  //         d="M12 12 L18 8 L18 16 L12 20 Z"
  //         fill="url(#cubeGradient1)"
  //         opacity="0.7"
  //       />
  //       {/* Face dessus */}
  //       <path
  //         d="M12 4 L6 8 L12 12 L18 8 Z"
  //         fill="url(#cubeGradient1)"
  //         opacity="0.9"
  //       />
  //       {/* Contours */}
  //       <path
  //         d="M12 4 L6 8 M12 4 L18 8 M6 8 L6 16 M18 8 L18 16 M6 16 L12 20 M18 16 L12 20 M12 12 L6 8 M12 12 L18 8 M12 12 L12 20"
  //         stroke="hsl(341, 100%, 32%)"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   );
  // V8 - Grille de pixels/Matrix
  //      <svg
  //       className="h-6 w-6"
  //       style={{ scale: "1.1", position: "relative", top: "5px", right: "6px" }}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect
  //         x="3"
  //         y="3"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="1"
  //         rx="1"
  //       />
  //       <rect
  //         x="10"
  //         y="3"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.7"
  //         rx="1"
  //       />
  //       <rect
  //         x="17"
  //         y="3"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.4"
  //         rx="1"
  //       />
  //       <rect
  //         x="3"
  //         y="10"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.8"
  //         rx="1"
  //       />
  //       <rect
  //         x="10"
  //         y="10"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="1"
  //         rx="1"
  //       />
  //       <rect
  //         x="17"
  //         y="10"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.6"
  //         rx="1"
  //       />
  //       <rect
  //         x="3"
  //         y="17"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.5"
  //         rx="1"
  //       />
  //       <rect
  //         x="10"
  //         y="17"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="0.8"
  //         rx="1"
  //       />
  //       <rect
  //         x="17"
  //         y="17"
  //         width="4"
  //         height="4"
  //         fill="hsl(341, 100%, 32%)"
  //         opacity="1"
  //         rx="1"
  //       />
  //     </svg>
  //   );
  return (
    <svg
      className="h-6 w-6"
      style={{ scale: "1.1", position: "relative", top: "5px", right: "6px" }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="1"
        rx="1"
      />
      <rect
        x="10"
        y="3"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.7"
        rx="1"
      />
      <rect
        x="17"
        y="3"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.4"
        rx="1"
      />
      <rect
        x="3"
        y="10"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.8"
        rx="1"
      />
      <rect
        x="10"
        y="10"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="1"
        rx="1"
      />
      <rect
        x="17"
        y="10"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.6"
        rx="1"
      />
      <rect
        x="3"
        y="17"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.5"
        rx="1"
      />
      <rect
        x="10"
        y="17"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="0.8"
        rx="1"
      />
      <rect
        x="17"
        y="17"
        width="4"
        height="4"
        fill="hsl(341, 100%, 32%)"
        opacity="1"
        rx="1"
      />
    </svg>
  );
}
