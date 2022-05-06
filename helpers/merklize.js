function merklize(nodes) {
  if (nodes.length === 1) {
    return sha256(nodes[0]);
  } else if (nodes.length !== 0) {
    return sha256(
      sha256(merklize(nodes.slice(0, nodes.length / 2))) +
        sha256(merklize(nodes.slice(nodes.length / 2)))
    );
  }
}

export { merklize };
