import React, { ComponentProps } from "react";

export const combineContext = (...components: React.FC[]): React.FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<React.FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
