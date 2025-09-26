import GrandChild from "./GrandChild";

function Child({ std, list }) {
  //   console.log(props);
  //   const { std } = props;

  return (
    <>
      <h4>I am a Child component</h4>
      <h3>my name is{std.name}</h3>
      {list.map((ele, indx) => {
        return (
          <div key={indx}>
            <h3>{ele.name}</h3>
            <button>add</button>
          </div>
        );
      })}
      <GrandChild stu={std} />
    </>
  );
}

export default Child;
