namespace Ko {
  test("Can you make spareMoney idempotent?", function () {
    interface AbstractEvent<T extends string, P> {
      id: string;
      type: T;
      payload: P;
    }

    type MoneySparedEvent = AbstractEvent<"MONEY_SPARED_EVENT", number>;

    type MoneyWithdrawnEvent = AbstractEvent<"MONEY_WITHDRAWN_EVENT", number>;

    type Event = MoneySparedEvent | MoneyWithdrawnEvent;

    interface Wealth {
      readonly value: number;
    }

    const wealthReducer =
      (wealth: Wealth) =>
      (additionalAmount: number): Wealth => {
        return {
          ...wealth,
          value: wealth.value + additionalAmount,
        };
      };

    const pastEvents = new Set<string>();

    // A database emulation
    let wealth: Wealth = {
      value: 0,
    };

    function spareMoney({ id, type, payload: additionalAmount }: Event): void {
      if (type !== "MONEY_SPARED_EVENT" || pastEvents.has(id)) {
        return;
      }
      wealth = wealthReducer(wealth)(additionalAmount);
      pastEvents.add(id);
    }

    const event: MoneySparedEvent = {
      id: "b87a6147-9c6e-4cff-bb40-819ccea42c56",
      type: "MONEY_SPARED_EVENT",
      payload: 450,
    };
    spareMoney(event);
    expect(wealth.value).toEqual(450);
    spareMoney(event);
    expect(wealth.value).toEqual(450); // Your job: make the test pass!
  });
}
