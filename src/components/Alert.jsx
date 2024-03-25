import clsx from "clsx";

import css from "./Alert.module.css";

export const Alert = ({ variant, children }) => {
  return <p className={clsx(css.alert, css[variant])}>{children}</p>;
};

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}>
//       {children}
//     </p>
//   );
// };
