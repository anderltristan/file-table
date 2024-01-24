import { Table } from ".";
import { fireEvent, getAllByTestId, getByTestId, render } from "@testing-library/react";
import { data } from "../../common/constants";

describe("Table test", () => {
  it("Renders a table", () => {
    const { getByText } = render(
      <Table
        rows={[]}
        data={data}
        columns={['', 'Name','Device','Path','Status']}
      />
    );

    expect(getByText("Name")).toBeTruthy();
  });

  it("Selects checkbox selectors for rows", () => {
    const { container } = render(
      <Table
        rows={[]}
        data={data}
        columns={['', 'Name','Device','Path','Status']}
      />
    );

    const checkbox = getAllByTestId(container, "row-checkbox");
    fireEvent.click(checkbox[0]);

    expect(container).toHaveTextContent("Selected 1");
  });

  it("Selects a select/deselect all checkbox", () => {
    const { container } = render(
      <Table
        rows={[]}
        data={data}
        columns={['', 'Name','Device','Path','Status']}
      />
    );

    const selectAllCheckbox = getAllByTestId(container, "selectall-checkbox");
    fireEvent.click(selectAllCheckbox[0]);

    expect(container).toHaveTextContent("Selected 5");

    const deselectAllCheckbox = getAllByTestId(container, "selectall-checkbox");
    fireEvent.click(deselectAllCheckbox[0]);

    expect(container).toHaveTextContent("None Selected");
  });

  it("Should have a download button", () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

    const { container } = render(
      <Table
        rows={[]}
        data={data}
        columns={['', 'Name','Device','Path','Status']}
      />
    );

    const selectAllCheckbox = getAllByTestId(container, "selectall-checkbox");
    fireEvent.click(selectAllCheckbox[0]);

    const downloadButton = getByTestId(container, "download-button");
    fireEvent.click(downloadButton);

    expect(alertMock).toHaveBeenCalledTimes(1)
  });
})