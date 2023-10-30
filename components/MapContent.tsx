import {IHeadingAndTitle} from '../_lib/types';
import BotSection from './botSection/BotSection';
import HeadingAndTitle from './headingandTitle/HeadingAndTitle';
import ReportSection from './reportSection/ReportSection';


type IMapContentProps = {
  content:IHeadingAndTitle[];
};

const MapContent = ({ content }: IMapContentProps) => {
  return (
    <div className="overflow-hidden">
      {content.map(item => {
        switch (item._type) {
          case 'headingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />
          case 'bot':
            return <BotSection tenantId={''} instanceId={''} subscriptionKey={''} debug={false} autoScroll={false} image={{
              _key: '',
              _id: '',
              url: undefined,
              _type: '',
              asset: {
                url: function (url: any): unknown {
                  throw new Error('Function not implemented.');
                },
                _ref: '',
                _type: ''
              }
            }} key={item._key} {...item} />
            case 'report':
              return <ReportSection reportUrl={undefined} companyName={undefined} logo={undefined} key={item._key} {...item} />
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
