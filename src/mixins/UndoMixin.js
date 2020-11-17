export const UndoMixin = {
  data() {
    return {
      done: [],
    };
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type !== `UNDO`) {
        this.done.push(mutation);
      }
    });
  },
  methods: {
    undo() {
      this.undone.push(this.done.pop());
      this.$store.commit('UNDO');
      this.done.forEach(mutation => {
        this.$store.commit(`${mutation.type}`, mutation.payload);
        this.done.pop();
      });
    }
  },
  computed: {
    canUndo() {
      return Boolean(this.done.length);
    }
  },
}
