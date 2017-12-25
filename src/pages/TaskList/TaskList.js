import { Link } from 'react-router-dom';
import { Tabs, Tablink, Tab, TabContent } from 'components/Tabs/index';

const days = [, 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.tasks = [
      { id: 1, title: 'First' },
      { id: 2, title: 'Second' }
    ];
  }

  render() {
    return (
      <Tabs>
        {
          days.map((day) => (
            <Tab key={day}>
              <Tablink title={day} />
              <TabContent>
                <ul> {
                  this.tasks.map(task => (
                      <li key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                          {task.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>

                <button>Add new</button>
              </TabContent>
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}
