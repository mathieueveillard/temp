namespace Ko {
  test("Can you make spareMoney idempotent?", function () {
    interface AbstractEvent<T extends string, P> {
      type: T;
      payload: P;
    }

    type MoneySparedEvent = AbstractEvent<"MONEY_SPARED_EVENT", number>;

    type MoneyWithdrawnEvent = AbstractEvent<"MONEY_WITHDRAWN_EVENT", number>;

    type Event = MoneySparedEvent | MoneyWithdrawnEvent;

    interface Wealth {
      readonly value: number;
    }

    // A database emulation
    let wealth: Wealth = {
      value: 0,
    };

    function spareMoney({ type, payload: additionalAmount }: Event): void {
      if (type === "MONEY_SPARED_EVENT") {
        wealth = {
          ...wealth,
          value: wealth.value + additionalAmount,
        };
      }
    }

    const event: MoneySparedEvent = {
      type: "MONEY_SPARED_EVENT",
      payload: 450,
    };
    spareMoney(event);
    expect(wealth.value).toEqual(450);
    spareMoney(event);
    expect(wealth.value).toEqual(900);
  });
}
